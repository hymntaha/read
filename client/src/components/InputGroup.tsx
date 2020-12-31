import classNames from "classnames";

const InputGroup: React.FC = () => {
  return (
    <div className="mb-2">
      <input
        type="email"
        className={classNames(
          "w-full p-3 py-2 duration-200 border border-gray-300 rounded outline-none bg-gray-50 focus:bg-white hover:bg-white",
          { "border-red-500": errors.email }
        )}
        placeholder="EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <small className="font-medium text-red-600">{errors.email}</small>
    </div>
  );
};

export default InputGroup;
