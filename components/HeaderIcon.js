export default function HeaderIcon({ Icon, title }) {
  return (
    <div className="select-none m-3 flex flex-col items-center w-20 cursor-pointer hover:text-white active:text-red-400">
      <Icon className="h-8" />
      <p className="my-2">{title}</p>
    </div>
  );
}
