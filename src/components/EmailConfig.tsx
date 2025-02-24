
import { useState } from "react";
import { toast } from "sonner";

interface EmailConfigFormData {
  emailAddress: string;
  connectionType: "IMAP" | "POP3" | "GMAIL" | "OUTLOOK";
  username: string;
  password: string;
  host?: string;
}

export const EmailConfig = () => {
  const [configs, setConfigs] = useState<EmailConfigFormData[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<EmailConfigFormData>({
    emailAddress: "",
    connectionType: "IMAP",
    username: "",
    password: "",
    host: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // In a real app, this would make an API call to save the config
      setConfigs([...configs, formData]);
      setIsAdding(false);
      setFormData({
        emailAddress: "",
        connectionType: "IMAP",
        username: "",
        password: "",
        host: "",
      });
      toast.success("Email configuration added");
    } catch (error) {
      toast.error("Failed to add email configuration");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Email Configurations</h2>
        <button
          onClick={() => setIsAdding(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Add Configuration
        </button>
      </div>

      {isAdding && (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              required
              value={formData.emailAddress}
              onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Connection Type</label>
            <select
              value={formData.connectionType}
              onChange={(e) => setFormData({ ...formData, connectionType: e.target.value as EmailConfigFormData["connectionType"] })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="IMAP">IMAP</option>
              <option value="POP3">POP3</option>
              <option value="GMAIL">Gmail API</option>
              <option value="OUTLOOK">Outlook API</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              required
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password/Token</label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          {(formData.connectionType === "IMAP" || formData.connectionType === "POP3") && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Host</label>
              <input
                type="text"
                value={formData.host}
                onChange={(e) => setFormData({ ...formData, host: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
          )}

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save Configuration
            </button>
          </div>
        </form>
      )}

      <div className="grid gap-4">
        {configs.map((config, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{config.emailAddress}</h3>
                <p className="text-sm text-gray-500">
                  {config.connectionType} - {config.username}
                </p>
              </div>
              <button
                onClick={() => {
                  const newConfigs = configs.filter((_, i) => i !== index);
                  setConfigs(newConfigs);
                  toast.success("Configuration removed");
                }}
                className="text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
