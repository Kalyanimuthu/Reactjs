import React, { useState, useEffect } from "react";

export default function App() {
  const [step, setStep] = useState(1);

  // Step 1 — Student Details
  const [student, setStudent] = useState({
    name: "",
    email: "",
    country: "",
    gender: "",
  });

  // Step 2 — Course Details (Dynamic)
  const [courses, setCourses] = useState([
    { courseName: "", duration: "", fees: "" },
  ]);

  const [errors, setErrors] = useState({});
  const [emailExists, setEmailExists] = useState(false);
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ✅ Handle Input Changes
  const handleStudentChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleCourseChange = (index, e) => {
    const newCourses = [...courses];
    newCourses[index][e.target.name] = e.target.value;
    setCourses(newCourses);
  };

  // ➕ Add Course
  const addCourse = () => {
    setCourses([...courses, { courseName: "", duration: "", fees: "" }]);
  };

  // ❌ Remove Course
  const removeCourse = (index) => {
    const newCourses = courses.filter((_, i) => i !== index);
    setCourses(newCourses);
  };

  // 🧠 Async Email Check Simulation
  useEffect(() => {
    if (student.email) {
      setIsCheckingEmail(true);
      setTimeout(() => {
        // Simulated existing email list
        const existingEmails = ["test@example.com", "user@demo.com"];
        setEmailExists(existingEmails.includes(student.email.toLowerCase()));
        setIsCheckingEmail(false);
      }, 1000);
    }
  }, [student.email]);

  // 🧾 Validation
  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!student.name) newErrors.name = "Name is required";
      if (!student.email) newErrors.email = "Email is required";
      if (!student.country) newErrors.country = "Country is required";
      if (!student.gender) newErrors.gender = "Gender is required";
      if (emailExists) newErrors.email = "Email already exists!";
    }

    if (step === 2) {
      courses.forEach((course, i) => {
        if (!course.courseName || !course.duration || !course.fees)
          newErrors[`course-${i}`] = "All course fields are required";
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🧾 Submit Step
  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };

  // ✅ Confirm Submission
  const handleConfirm = () => {
    setSubmitted(true);

    setTimeout(() => {
      setStep(1);
      setStudent({ name: "", email: "", country: "", gender: "" });
      setCourses([{ courseName: "", duration: "", fees: "" }]);
      setSubmitted(false);
    }, 5000);
  };

  // 🔢 Progress bar steps
  const stepNames = ["Student Details", "Course Selection", "Review & Confirm"];

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6 mt-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        📚 Online Course Enrollment
      </h1>

      {/* Progress Indicator */}
      <div className="flex justify-between mb-6">
        {stepNames.map((label, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold ${
                index + 1 <= step ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              {index + 1}
            </div>
            <span
              className={`text-xs mt-1 ${
                index + 1 <= step ? "text-blue-700 font-semibold" : "text-gray-500"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Step 1 — Student Details */}
      {step === 1 && (
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={student.name}
            onChange={handleStudentChange}
            className="w-full border p-2 rounded-md"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={student.email}
            onChange={handleStudentChange}
            className="w-full border p-2 rounded-md"
          />
          {isCheckingEmail && (
            <p className="text-gray-500 text-sm">Checking email...</p>
          )}
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <select
            name="country"
            value={student.country}
            onChange={handleStudentChange}
            className="w-full border p-2 rounded-md"
          >
            <option value="">Select Country</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country}</p>
          )}

          <div className="flex gap-4">
            {["Male", "Female", "Other"].map((g) => (
              <label key={g} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={student.gender === g}
                  onChange={handleStudentChange}
                />
                {g}
              </label>
            ))}
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender}</p>
          )}

          <button
            onClick={handleNext}
            className="bg-blue-600 text-white w-full py-2 rounded-md mt-4 hover:bg-blue-700 transition"
          >
            Next →
          </button>
        </div>
      )}

      {/* Step 2 — Course Selection */}
      {step === 2 && (
        <div className="space-y-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="border p-3 rounded-lg bg-gray-50 relative"
            >
              <div className="grid grid-cols-3 gap-2">
                <select
                  name="courseName"
                  value={course.courseName}
                  onChange={(e) => handleCourseChange(index, e)}
                  className="border p-2 rounded-md"
                >
                  <option value="">Select Course</option>
                  <option>React Basics</option>
                  <option>Node.js Fundamentals</option>
                  <option>UI/UX Design</option>
                </select>

                <select
                  name="duration"
                  value={course.duration}
                  onChange={(e) => handleCourseChange(index, e)}
                  className="border p-2 rounded-md"
                >
                  <option value="">Duration</option>
                  <option>1 Month</option>
                  <option>3 Months</option>
                  <option>6 Months</option>
                </select>

                <select
                  name="fees"
                  value={course.fees}
                  onChange={(e) => handleCourseChange(index, e)}
                  className="border p-2 rounded-md"
                >
                  <option value="">Fees</option>
                  <option>₹5000</option>
                  <option>₹10000</option>
                  <option>₹15000</option>
                </select>
              </div>

              {errors[`course-${index}`] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[`course-${index}`]}
                </p>
              )}

              {courses.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeCourse(index)}
                  className="absolute top-2 right-2 text-red-500 text-sm"
                >
                  ❌ Remove
                </button>
              )}
            </div>
          ))}

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={addCourse}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              + Add Course
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Step 3 — Review & Confirm */}
      {step === 3 && (
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Review Your Data
          </h2>

          <div className="bg-gray-50 p-3 rounded-md mb-4">
            <p>
              <strong>Name:</strong> {student.name}
            </p>
            <p>
              <strong>Email:</strong> {student.email}
            </p>
            <p>
              <strong>Country:</strong> {student.country}
            </p>
            <p>
              <strong>Gender:</strong> {student.gender}
            </p>
          </div>

          <div className="bg-gray-50 p-3 rounded-md">
            <h3 className="font-semibold mb-2">Selected Courses:</h3>
            {courses.map((course, index) => (
              <p key={index}>
                {course.courseName} — {course.duration} — {course.fees}
              </p>
            ))}
          </div>

          {!submitted ? (
            <div className="flex justify-between mt-5">
              <button
                onClick={() => setStep(2)}
                className="bg-gray-400 text-white px-4 py-2 rounded-md"
              >
                ← Back
              </button>
              <button
                onClick={handleConfirm}
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
              >
                Confirm Enrollment
              </button>
            </div>
          ) : (
            <div className="text-center text-green-600 font-semibold mt-4">
              ✅ Enrollment Confirmed! Resetting form in 5 seconds...
            </div>
          )}
        </div>
      )}
    </div>
  );
}
  