"use client";

import { useState } from "react";

type EducationLevel = "school" | "graduation" | "";

interface FormData {
  fullName: string;
  address: string;
  mobile: string;
  email: string;
  birthdate: string;
  gender: string;
  category: string;
  educationLevel: EducationLevel;
  schoolStandard: string;
  graduationCourse: string;
  mainSubject: string;
  sscPassingDate: string;
  sscSeatNo: string;
  sscMarks: string;
  sscPercentage: string;
  hscPassingDate: string;
  hscSeatNo: string;
  hscMarks: string;
  hscPercentage: string;
}

const initialFormData: FormData = {
  fullName: "",
  address: "",
  mobile: "",
  email: "",
  birthdate: "",
  gender: "",
  category: "",
  educationLevel: "",
  schoolStandard: "",
  graduationCourse: "",
  mainSubject: "",
  sscPassingDate: "",
  sscSeatNo: "",
  sscMarks: "",
  sscPercentage: "",
  hscPassingDate: "",
  hscSeatNo: "",
  hscMarks: "",
  hscPercentage: "",
};

const SCHOOL_LEVELS = [
  { value: "pre-primary", label: "Pre-Primary" },
  { value: "primary", label: "Primary" },
  { value: "secondary", label: "Secondary" },
  { value: "higher-secondary", label: "Higher Secondary" },
];

const GRADUATION_COURSES = [
  "BA",
  "B.Com",
  "B.Sc",
  "BCA",
  "MBA",
  "Diploma",
  "ITI",
  "PGDM",
  "LT",
  "DHTM (Hotel Management)",
];

const CATEGORIES = ["General", "SC", "ST", "OBC", "EWS"];

export default function AdmissionForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Valid 10-digit mobile number is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.birthdate) newErrors.birthdate = "Birthdate is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.educationLevel)
      newErrors.educationLevel = "Please select an education level";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mb-4 text-4xl">&#10003;</div>
        <h3 className="mb-2 text-xl font-bold text-green-800">
          Application Submitted
        </h3>
        <p className="text-green-700">
          Thank you for your application. We will contact you soon.
        </p>
        <button
          type="button"
          onClick={() => {
            setFormData(initialFormData);
            setSubmitted(false);
          }}
          className="mt-6 rounded-md bg-primary px-6 py-2 text-sm font-semibold text-white hover:bg-primary-light"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      {Object.keys(errors).length > 0 && (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Please correct the errors below.
        </div>
      )}

      {/* Personal Information */}
      <fieldset className="space-y-4">
        <legend className="mb-4 text-lg font-bold text-foreground">
          Personal Information
        </legend>

        <div>
          <label
            htmlFor="fullName"
            className="mb-1 block text-sm font-medium text-foreground"
          >
            Full Name (As per LC/Marksheet) *
          </label>
          <input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            className={`w-full rounded-md border px-4 py-2.5 text-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${errors.fullName ? "border-red-400" : "border-gray-300"}`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="address"
            className="mb-1 block text-sm font-medium text-foreground"
          >
            Address *
          </label>
          <textarea
            id="address"
            rows={3}
            value={formData.address}
            onChange={(e) => updateField("address", e.target.value)}
            className={`w-full rounded-md border px-4 py-2.5 text-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${errors.address ? "border-red-400" : "border-gray-300"}`}
          />
          {errors.address && (
            <p className="mt-1 text-xs text-red-600">{errors.address}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="mobile"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              Mobile Number *
            </label>
            <input
              id="mobile"
              type="tel"
              value={formData.mobile}
              onChange={(e) => updateField("mobile", e.target.value)}
              className={`w-full rounded-md border px-4 py-2.5 text-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${errors.mobile ? "border-red-400" : "border-gray-300"}`}
            />
            {errors.mobile && (
              <p className="mt-1 text-xs text-red-600">{errors.mobile}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              className={`w-full rounded-md border px-4 py-2.5 text-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${errors.email ? "border-red-400" : "border-gray-300"}`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label
              htmlFor="birthdate"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              Birthdate *
            </label>
            <input
              id="birthdate"
              type="date"
              value={formData.birthdate}
              onChange={(e) => updateField("birthdate", e.target.value)}
              className={`w-full rounded-md border px-4 py-2.5 text-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${errors.birthdate ? "border-red-400" : "border-gray-300"}`}
            />
            {errors.birthdate && (
              <p className="mt-1 text-xs text-red-600">{errors.birthdate}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="gender"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              Gender *
            </label>
            <select
              id="gender"
              value={formData.gender}
              onChange={(e) => updateField("gender", e.target.value)}
              className={`w-full rounded-md border px-4 py-2.5 text-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${errors.gender ? "border-red-400" : "border-gray-300"}`}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <p className="mt-1 text-xs text-red-600">{errors.gender}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="category"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              Category *
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => updateField("category", e.target.value)}
              className={`w-full rounded-md border px-4 py-2.5 text-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${errors.category ? "border-red-400" : "border-gray-300"}`}
            >
              <option value="">Select Category</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat.toLowerCase()}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-xs text-red-600">{errors.category}</p>
            )}
          </div>
        </div>
      </fieldset>

      {/* Education Level */}
      <fieldset className="space-y-4">
        <legend className="mb-4 text-lg font-bold text-foreground">
          Education Level *
        </legend>
        {errors.educationLevel && (
          <p className="text-xs text-red-600">{errors.educationLevel}</p>
        )}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label
            className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${formData.educationLevel === "school" ? "border-primary bg-primary/5" : "border-gray-200 hover:border-primary/30"}`}
          >
            <input
              type="radio"
              name="educationLevel"
              value="school"
              checked={formData.educationLevel === "school"}
              onChange={(e) =>
                updateField("educationLevel", e.target.value as EducationLevel)
              }
              className="accent-primary"
            />
            <div>
              <div className="font-medium text-foreground">Schooling</div>
              <div className="text-xs text-text-muted">
                Pre-Primary to Higher Secondary
              </div>
            </div>
          </label>
          <label
            className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${formData.educationLevel === "graduation" ? "border-primary bg-primary/5" : "border-gray-200 hover:border-primary/30"}`}
          >
            <input
              type="radio"
              name="educationLevel"
              value="graduation"
              checked={formData.educationLevel === "graduation"}
              onChange={(e) =>
                updateField("educationLevel", e.target.value as EducationLevel)
              }
              className="accent-primary"
            />
            <div>
              <div className="font-medium text-foreground">
                Graduation &amp; Above
              </div>
              <div className="text-xs text-text-muted">
                BA, B.Com, B.Sc, BCA, MBA, etc.
              </div>
            </div>
          </label>
        </div>

        {formData.educationLevel === "school" && (
          <div>
            <label
              htmlFor="schoolStandard"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              School Level
            </label>
            <select
              id="schoolStandard"
              value={formData.schoolStandard}
              onChange={(e) => updateField("schoolStandard", e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
            >
              <option value="">Select Level</option>
              {SCHOOL_LEVELS.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {formData.educationLevel === "graduation" && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="graduationCourse"
                className="mb-1 block text-sm font-medium text-foreground"
              >
                Course
              </label>
              <select
                id="graduationCourse"
                value={formData.graduationCourse}
                onChange={(e) =>
                  updateField("graduationCourse", e.target.value)
                }
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
              >
                <option value="">Select Course</option>
                {GRADUATION_COURSES.map((course) => (
                  <option key={course} value={course.toLowerCase()}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="mainSubject"
                className="mb-1 block text-sm font-medium text-foreground"
              >
                Main Subject
              </label>
              <input
                id="mainSubject"
                type="text"
                value={formData.mainSubject}
                onChange={(e) => updateField("mainSubject", e.target.value)}
                placeholder="Enter main subject"
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        )}
      </fieldset>

      {/* Marksheet Details */}
      <fieldset className="space-y-4">
        <legend className="mb-4 text-lg font-bold text-foreground">
          SSC / HSC / Graduation Marksheet Details
        </legend>
        <p className="text-xs text-text-muted">
          Please enter details if you have received marksheet, otherwise leave
          it blank.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="sscPassingDate"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              SSC Passing Month &amp; Year
            </label>
            <input
              id="sscPassingDate"
              type="month"
              value={formData.sscPassingDate}
              onChange={(e) => updateField("sscPassingDate", e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="sscSeatNo"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              SSC Seat No.
            </label>
            <input
              id="sscSeatNo"
              type="text"
              value={formData.sscSeatNo}
              onChange={(e) => updateField("sscSeatNo", e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="sscMarks"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              SSC Obtained Marks / Out of Marks
            </label>
            <input
              id="sscMarks"
              type="text"
              value={formData.sscMarks}
              onChange={(e) => updateField("sscMarks", e.target.value)}
              placeholder="e.g. 450/500"
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="sscPercentage"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              SSC Percentage
            </label>
            <input
              id="sscPercentage"
              type="text"
              value={formData.sscPercentage}
              onChange={(e) => updateField("sscPercentage", e.target.value)}
              placeholder="e.g. 90%"
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="hscPassingDate"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              HSC Passing Month &amp; Year
            </label>
            <input
              id="hscPassingDate"
              type="month"
              value={formData.hscPassingDate}
              onChange={(e) => updateField("hscPassingDate", e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="hscSeatNo"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              HSC Seat No.
            </label>
            <input
              id="hscSeatNo"
              type="text"
              value={formData.hscSeatNo}
              onChange={(e) => updateField("hscSeatNo", e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="hscMarks"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              HSC Obtained Marks / Out of Marks
            </label>
            <input
              id="hscMarks"
              type="text"
              value={formData.hscMarks}
              onChange={(e) => updateField("hscMarks", e.target.value)}
              placeholder="e.g. 450/500"
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="hscPercentage"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              HSC Percentage
            </label>
            <input
              id="hscPercentage"
              type="text"
              value={formData.hscPercentage}
              onChange={(e) => updateField("hscPercentage", e.target.value)}
              placeholder="e.g. 90%"
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
      </fieldset>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full rounded-md bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light sm:w-auto"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
}
