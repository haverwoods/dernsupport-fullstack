import React, { useEffect, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import Layout from "../layout/layout";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// import { toast, useToast } from "@/hooks/use-toast"
import { useToast } from "@/hooks/use-toast"



// import { decode } from "jwt-decode";
// import { useAuth } from "../context/authcontexts"; // Custom auth hook

export const Repairrequest = () => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [pickup_date, setpickupdate] = useState("");  
  const [image, setImage] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [userInfo, setUserInfo] = useState({
    id: null,
    username: null,
    email: null,
  });
  const [tokenDebugInfo, setTokenDebugInfo] = useState({
    tokenPresent: false,
    decodedSuccessfully: false,
  });

  // const [date, setDate] = React.useState<Date>
  const [date, setDate] = React.useState(null);
  const { toast} = useToast()

  // const { user , loading } = useAuth(); // Access authenticated user
  // const token = localStorage.getItem("authToken");
  // const decodedToken = token ? jwtDecode(token) : null;
  // const email = decodedToken?.email || "Not logged in";

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token ? "Present" : "Not found");

    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log("Decoded token:", decodedToken);

        // extract user information
        const extractedInfo = {
          id: decodedToken.user?.id || null,
          username: decodedToken.user?.username || null,
          email: decodedToken.user?.email || null,
        };

        setUserInfo(extractedInfo);
        setEmail(extractedInfo.email);

        setTokenDebugInfo({ tokenPresent: true, decodedSuccessfully: true });

        console.log("Extracted user info:", extractedInfo);
      } catch (error) {
        console.error("Error decoding token:", error);
        setTokenDebugInfo({ tokenPresent: true, decodedSuccessfully: false });
      }
    } else {
      console.log("No token found in localStorage");
      setTokenDebugInfo({ tokenPresent: false, decodedSuccessfully: false });
    }
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description || !image) {
      alert("Please fill in the description and upload an image.");
      return;
    }

    // Ensure the user is authenticated
    if (!userInfo.id) {
      alert("You must be logged in to submit a repair request.");
      console.log(userInfo);
      return;
    }

    const formData = new FormData();
    formData.append("description", description);
    formData.append("image", image);
    formData.append("userId", userInfo.id);
    formData.append("pickupdate" ,pickup_date)
    formData.append("userEmail", userInfo.email);

    try {
      const response = await axios.post(
        "http://localhost:5000/routes/request/request",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Repair request submitted successfully:", response.data);
      alert("Repair request submitted successfully!");
      toast({
        title: "Sucessfully submitted",
        description: "you will receive email soon",
      })

      setDescription("");
      setpickupdate("");
      setImage(null);
      setSelectedFiles([]);
    } catch (error) {
      console.error("Error submitting repair request:", error);
      // alert("Error submitting repair request. Please try again.");
      toast({
        title: "error",
        description: "Error submitting repair request. Please try again",
      })
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setSelectedFiles(Array.from(event.target.files));
  };

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="p-8 w-full">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">
                Repair Request
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <p>User Email: {email}</p>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="3"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Describe the issue"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <IoCloudUploadOutline className="w-10 h-10 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      multiple
                    />
                  </label>
                </div>

                <div className="selected-files">
                  {selectedFiles.length > 0 && (
                    <ul>
                      {selectedFiles.map((file, index) => (
                        <li key={index} className="text-sm text-gray-500">
                          <span className="block w-32 truncate text-center">
                            {file.name}
                          </span>
                          {file.type.startsWith("image/") && (
                            <img
                              src={URL.createObjectURL(file)}
                              alt={file.name}
                              className="mt-2 h-20 w-20 object-cover rounded-lg"
                            />
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* //add date picker from shadcn ui */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? (
                        format(date, "PPP")
                      ) : (
                        <span>Pick a date for pickup</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      value={pickup_date}
                      onChange={(e) =>  setpickupdate(e.target.value)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Repairrequest;
