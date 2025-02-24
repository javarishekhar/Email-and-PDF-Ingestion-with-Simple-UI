
import { FileDown } from "lucide-react";
import { toast } from "sonner";

// Mock PDF data
const mockPDFs = [
  { id: 1, title: "Annual Report 2024", size: "2.4 MB" },
  { id: 2, title: "Product Documentation", size: "1.8 MB" },
  { id: 3, title: "User Guide", size: "3.2 MB" },
  { id: 4, title: "Technical Specifications", size: "1.1 MB" },
  { id: 5, title: "Research Paper", size: "4.5 MB" },
  { id: 6, title: "Project Proposal", size: "892 KB" },
];

export const PDFList = () => {
  const handleDownload = async (title: string) => {
    try {
      // Create a simple PDF-like blob (this is just for demonstration)
      const content = `This is a sample PDF content for ${title}`;
      const blob = new Blob([content], { type: 'application/pdf' });
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${title.toLowerCase().replace(/\s+/g, '-')}.pdf`;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up
      window.URL.revokeObjectURL(url);
      
      toast.success("Download started", {
        description: `${title} is being downloaded`,
      });
    } catch (error) {
      toast.error("Download failed", {
        description: "There was an error downloading the file",
      });
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {mockPDFs.map((pdf) => (
        <div
          key={pdf.id}
          onClick={() => handleDownload(pdf.title)}
          className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300 cursor-pointer"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                {pdf.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{pdf.size}</p>
            </div>
            <button 
              className="ml-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleDownload(pdf.title);
              }}
            >
              <FileDown className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </div>
      ))}
    </div>
  );
};
