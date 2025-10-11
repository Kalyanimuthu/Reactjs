import React, { useState } from 'react';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    gender: '',
    dob: '',
    role: '',
    coverLetter: '',
    techStack: '',
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resumePreview, setResumePreview] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.mobile) newErrors.mobile = 'Mobile is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';
    if (!formData.role) newErrors.role = 'Job Role is required';
    if (!formData.coverLetter) newErrors.coverLetter = 'Cover Letter is required';
    if (!formData.resume) newErrors.resume = 'Resume is required';
    if (formData.role === 'Developer' && !formData.techStack) newErrors.techStack = 'Tech Stack is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
      setResumePreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Mock API delay
      await fetch('/api/apply', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });
      setSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        gender: '',
        dob: '',
        role: '',
        coverLetter: '',
        techStack: '',
        resume: null,
      });
      setResumePreview('');
    } catch (err) {
      console.error('Submission failed', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = Object.values(formData).every((val) => val || formData.role !== 'Developer' || formData.techStack);

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-xl space-y-4">
      <h2 className="text-2xl font-bold mb-4">Job Application Form</h2>

      {/* Personal Details */}
      <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange}
        className={`w-full p-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded`} />
      {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange}
        className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`} />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <input name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange}
        className={`w-full p-2 border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} rounded`} />
      {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}

      <div className="flex gap-4">
        <label><input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} /> Male</label>
        <label><input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} /> Female</label>
      </div>
      {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}

      <input type="date" name="dob" value={formData.dob} onChange={handleChange}
        className={`w-full p-2 border ${errors.dob ? 'border-red-500' : 'border-gray-300'} rounded`} />
      {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}

      {/* Professional Details */}
      <select name="role" value={formData.role} onChange={handleChange}
        className={`w-full p-2 border ${errors.role ? 'border-red-500' : 'border-gray-300'} rounded`}>
        <option value="">Select Job Role</option>
        <option value="Developer">Developer</option>
        <option value="Designer">Designer</option>
        <option value="PM">Project Manager</option>
      </select>
      {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}

      {formData.role === 'Developer' && (
        <>
          <input name="techStack" placeholder="Preferred Tech Stack" value={formData.techStack} onChange={handleChange}
            className={`w-full p-2 border ${errors.techStack ? 'border-red-500' : 'border-gray-300'} rounded`} />
          {errors.techStack && <p className="text-red-500 text-sm">{errors.techStack}</p>}
        </>
      )}

      <textarea name="coverLetter" placeholder="Cover Letter" value={formData.coverLetter} onChange={handleChange}
        className={`w-full p-2 border ${errors.coverLetter ? 'border-red-500' : 'border-gray-300'} rounded`} />
      {errors.coverLetter && <p className="text-red-500 text-sm">{errors.coverLetter}</p>}

      <input type="file" name="resume" onChange={handleChange}
        className={`w-full p-2 border ${errors.resume ? 'border-red-500' : 'border-gray-300'} rounded`} />
      {resumePreview && <p className="text-sm text-gray-600 mt-1">Preview: {formData.resume?.name}</p>}
      {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}

      {/* Submit */}
      <button type="submit" disabled={!isFormValid || isSubmitting}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50">
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>

      {success && <p className="text-green-600 mt-4">Application submitted successfully!</p>}
    </form>
  );
};

export default JobApplicationForm;
