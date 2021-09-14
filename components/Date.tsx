import { parseISO, format } from "date-fns";
interface IProps {
  dateString: string;
}
export default function Date({ dateString }: IProps) {
  const date = parseISO(dateString);
  return (
    <time className="font-thin" dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}
