export const Instructions = () => {
  return (
    <fieldset className="grid gap-6 rounded-lg border p-4">
      <legend className="-ml-1 px-1 text-sm font-medium">Instructions</legend>
      <div className="grid gap-3">
        <ul className="list-disc px-3">
          <li>
            Proceed to 123 Main St and direct traffic away from the scene.
          </li>
          <li>Stay calm and assess the situation.</li>
          <li>Ensure your safety and the safety of others.</li>
          <li>Provide clear and concise information about the situation.</li>
          <li>Follow any instructions given by emergency responders.</li>
          <li>Administer first aid if trained and if safe to do so.</li>
          <li>Keep the chat channel open and await further instructions.</li>
        </ul>
      </div>
    </fieldset>
  );
};
