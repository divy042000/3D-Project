import { useState } from "react";

export default function InfoPage() {
  // State for the input fields
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [overview, setOverview] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedProfiles, setSelectedProfiles] = useState([]);
  const [handles, setHandles] = useState([{ platform: "", handle: "" }]);

  // JavaScript constant for dropdown options
  const softwareSkills = [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "C++",
    "Java",
  ];
  const jobProfiles = [
    "Developer",
    "Designer",
    "Manager",
    "Analyst",
    "Tester",
    "DevOps Engineer",
    "Data Scientist",
    "Product Manager",
    "System Administrator",
    "Cloud Architect",
    "Security Specialist",
    "Network Engineer",
    "Mobile Developer",
    "Database Administrator",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UX/UI Designer",
    "Technical Support Engineer",
  ];

  const addHandleField = () => {
    setHandles([...handles, { platform: "", handle: "" }]);
  };

  const removeHandleField = (index) => {
    const newHandles = handles.filter((_, i) => i !== index);
    console.log("Handle :", newHandles);
    setHandles(newHandles);
  };
  // The URL string

  const platformRegexMap = {
    github: /github/gi,
    twitter: /twitter/gi,
    linkedin: /linkedin/gi,
    instagram: /instagram/gi,
    facebook: /facebook/gi,
    // Add more platforms and their regex patterns as needed
  };

  const searchUrlForPlatform = async (url) => {
    let platformMatched = null;

    // Iterate over the platformRegexMap
    for (const platform in platformRegexMap) {
      const regexPattern = platformRegexMap[platform];

      // Match the regexPattern against the URL
      const match = url.match(regexPattern);

      // If a match is found, save the platform name and the matched part of the URL
      if (match) {
        platformMatched = { platform, match: match[0] };
        break; // Exit the loop once a match is found
      }
    }

    // Return a message indicating the platform was not found, or the matched platform and its part in the URL
    return platformMatched ? platformMatched : null;
  };

  const updateHandleField = async (index, value) => {
    try {
      // Search for the platform
      const platformSearchResult = await searchUrlForPlatform(value);
      if (!platformSearchResult) {
        window.alert("Platform not found, please enter a valid platform.");
        return;
      } else {
        console.log(`Found platform: ${platformSearchResult.platform}`);
      }

      // Update the handles array
      const newHandles = handles.map((handle, i) => {
        if (i === index) {
          // Return the updated handle object for the matched index
          return { platform: platformSearchResult.platform, handle: value };
        }
        // Return the original handle object for unmatched indices
        return handle;
      });

      // Set the updated handles array
      console.log(newHandles);
      setHandles(newHandles);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  // Ensure searchUrlForPlatform is defined as shown previously

  // Function to handle changes in the dropdown
  const handleSkillChange = (event) => {
    const skill = event.target.value;
    if (skill && !selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
      event.target.value = ""; // Set the value to an empty string
    }
  };
  const handleProfileChange = (event) => {
    const profile = event.target.value;
    if (profile && !selectedProfiles.includes(profile)) {
      setSelectedProfiles([...selectedProfiles, profile]);
      event.target.value = ""; // Set the value to an empty string
    }
  };

  // Functions to handle changes in the input fields
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleMiddleNameChange = (event) => {
    setMiddleName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  // Function to handle changes in the username input field
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleRemoveSkill = (skillToRemove) => {
    setSelectedSkills(
      selectedSkills.filter((skill) => skill !== skillToRemove)
    );
  };
  const handleRemoveProfile = (profileToRemove) => {
    setSelectedProfiles(
      selectedProfiles.filter((profile) => profile !== profileToRemove)
    );
  };

  const handleOverviewChange = (event) => {
    const text = event.target.value;
    setOverview(text);
    // Update word count
    const words = text.trim().split(/\s+/);
    setWordCount(words.length);
  };

  return (
    <div className="flex flex-row ">
      {/* First Name */}
      <div className="flex flex-col w-1/2">
        <div className="flex flex-col  m-3 border-2 rounded-lg">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium leading-6 text-white m-2 font-mono"
          >
            First Name
          </label>
          <div className="relative m-2 rounded-md shadow-sm">
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm font-mono sm:leading-6"
              placeholder="Your First Name"
            />
          </div>

          {/* Middle Name */}
          <div>
            <label
              htmlFor="middleName"
              className="block text-sm font-medium leading-6 font-mono text-white m-2 "
            >
              Middle Name
            </label>
            <div className="relative m-2 rounded-md shadow-sm">
              <input
                type="text"
                name="middleName"
                id="middleName"
                value={middleName}
                onChange={handleMiddleNameChange}
                className="block w-full rounded-md border-0 font-mono py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6"
                placeholder="Your Middle Name"
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6 text-white m-2 font-mono"
            >
              Last Name
            </label>
            <div className="relative m-2 rounded-md shadow-sm">
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                className="block w-full rounded-md border-0 py-1.5 pl-7 font-mono pr-20 text-white ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6"
                placeholder="Your Last Name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-white m-2 font-mono"
            >
              Text Area
            </label>
            <div className="relative m-2 rounded-md shadow-sm">
              <textarea
                name="username"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className="block w-full rounded-md border-0 py-1.5 pl-7 font-mono pr-20 text-white ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6"
                placeholder="Text Area"
                rows="4" // Controls height
                cols="50" // Controls width
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="overview"
              className="block text-sm font-medium leading-6 text-white m-2 font-mono"
            >
              Overview
            </label>
            <div className="relative m-2 rounded-md shadow-sm">
              <textarea
                name="overview"
                id="overview"
                value={overview}
                onChange={handleOverviewChange}
                className="block w-full h-40 rounded-md border-0 py-1.5 font-mono pl-7 pr-20 text-white ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6"
                placeholder="Overview"
              />
              {/* Display word count */}
              <p className="text-right mt-1 text-xs text-gray-500">
                Words: {wordCount}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 border-2 rounded-lg m-3">
        <div className="m-3">
          <label
            htmlFor="softwareSkill"
            className="block text-sm font-medium leading-6 text-white font-mono"
          >
            Software Skills
          </label>
          <div className="relative m-2 rounded-md shadow-sm">
            <select
              id="softwareSkill"
              name="softwareSkill"
              onChange={handleSkillChange}
              className="block w-full rounded-md border-0 py-1.5 pl-3 pr-7 font-mono text-white ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            >
              <option value="">Select a skill</option>
              {softwareSkills.map((skill, index) => (
                <option key={index} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap border-2 rounded-lg m-2 min-h-4 max-h-64 overflow-auto">
          {selectedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex m-2 p-2 w-24 border-2 font-mono min-h-7 bg-white text-black rounded-lg shadow-md relative"
            >
              {skill}
              <button
                className="absolute top-0 right-0 mr-1 text-red  rounded-full w-6 h-6"
                onClick={() => handleRemoveSkill(skill)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
        <div className="m-3">
          <label
            htmlFor="jobProfile"
            className="block text-sm font-medium leading-6 text-white font-mono"
          >
            Job Profiles
          </label>
          <div className="relative m-2 rounded-md shadow-sm">
            <select
              id="jobProfile"
              name="jobProfile"
              onChange={handleProfileChange}
              className="block w-full rounded-md border-0 py-1.5 pl-3 pr-7 font-mono text-white ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            >
              <option value="">Select a Profile</option>
              {jobProfiles.map((profile, index) => (
                <option key={index} value={profile}>
                  {profile}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap border-2 rounded-lg m-2 min-h-4 max-h-64 overflow-auto">
          {selectedProfiles.map((profile, index) => (
            <div
              key={index}
              className="flex m-2 p-2 w-24 border-2 font-mono min-h-7 bg-white text-black rounded-lg shadow-md relative"
            >
              {profile}
              <button
                className="absolute top-0 right-0 mr-1 text-red rounded-full w-6 h-6"
                onClick={() => handleRemoveProfile(profile)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
        <div className="container mx-auto p-4 rounded-lg m-2">
          <h1 className="text-sm mb-4 font-mono">
            Add Your Social Media Handles
          </h1>
          <form className="max-w-sm mx-auto">
            {handles.map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                <input
                  type="text"
                  value={item.handle}
                  onChange={(e) => updateHandleField(index, e.target.value)}
                  className="w-full px-2 py-1 border rounded-lg mr-2 font-mono"
                  placeholder="Enter your handle"
                  required
                />
                <button
                  type="button"
                  onClick={() => removeHandleField(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600"
                >
                  -
                </button>
              </div>
            ))}
            <div className="flex flex-row justify-center">
              <button
                type="button"
                onClick={addHandleField}
                className="w-32 bg-green-500 text-white py-1 rounded hover:bg-green-600 mb-4 font-mono"
              >
                Add Handle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
