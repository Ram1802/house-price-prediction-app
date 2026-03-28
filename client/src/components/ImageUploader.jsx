import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";

export default function ImageUploader() {
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    toast.success("Image selected");
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Property Image Upload</h2>
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-3xl p-8 text-center cursor-pointer bg-slate-50 dark:bg-slate-800"
      >
        <input {...getInputProps()} />
        <p className="text-slate-600 dark:text-slate-300">
          Drag & Drop Property Image here or click to upload
        </p>
      </div>

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="mt-4 rounded-3xl w-full h-64 object-cover"
        />
      )}
    </div>
  );
}