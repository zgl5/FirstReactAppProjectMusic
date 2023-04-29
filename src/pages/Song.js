import { useParams } from "react-router-dom";




export default function Song(props) {
  const params = useParams();

  const link = params.link;
  console.log(link);
  console.log(props.data);

  const updatedData = props.data.find((element) => link === element.link);
  console.log(updatedData);
  return (
    <div>
      <h2>{updatedData.title}</h2>
      <h3>{updatedData.link}</h3>
    </div>
  );
}