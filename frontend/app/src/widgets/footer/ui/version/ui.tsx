import packageJson from "../../../../../package.json";

export const CurrentVersionProject = () => {
  return <span className="text-sm font-light">{packageJson.version}</span>;
};
