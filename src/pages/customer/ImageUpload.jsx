import React, { useRef } from "react";

const ImageUploadPage = ()=>{
     const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click(); // Trigger the hidden file input
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("Selected file:", file.name);
            // You can preview or upload here
        }
    };
    return(
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg text-center p-4">
                        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg text-center p-4">
                            <div className="text-center">
                                {/* Image Clickable */}
                                <div className="flex items-center justify-center cursor-pointer" onClick={handleImageClick}>
                                    <img
                                        src="https://ecme-react.themenate.net/img/others/upload.png"
                                        alt="upload"
                                        className="w-20 h-20"
                                    />
                                </div>

                                {/* Hidden File Input */}
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    className="hidden"
                                />

                                {/* Optional Upload Button */}
                                <button
                                    onClick={handleImageClick}
                                    className="bg-blue-600 hover:bg-blue-500 h-12 rounded-xl px-5 py-2 mt-4 text-white font-semibold"
                                >
                                    Upload Image
                                </button>
                            </div>
                        </div>
                    </div>
    )
}

export default ImageUploadPage;