import { Button } from "@/components/ui/button";

export const Description = () => {
  return (
    <div className="grid gap-3">
      <div className="flex items-center mb-2">
        <span className="mr-2 text-gray-600">ETA:</span>
        <span className="text-blue-600">15 minutes</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="mr-2 text-gray-600">Status:</span>
        <span className="text-green-600">En route</span>
      </div>
    </div>
  );
};
