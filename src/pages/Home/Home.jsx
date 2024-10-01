import axios from "axios";
import { useState } from "react";

export const Home = () => {
  const [input,setInput] = useState("");
  const handleInput = (event) => {
    setInput({name:event.target.value});
  }

  const handleSubmit = async() => {
    try{
      console.log(input)
      const response = await axios.post("http://localhost:8080/admins/addAdmin",input);
      console.log(response.data.success);
    }catch(error){
      console.log(error);
    }
  }
  return (
    <>
      <div className="flex justify-center items-center gap-20 mt-20">
        <form>
          <input
            className="border p-2 outline-none rounded-lg"
            type="text"
            placeholder="Enter name"
            onChange={handleInput}
          />
          <input
            className="bg-emerald-700 p-2 ml-5 text-white font-bold rounded-md cursor-pointer"
            type="button"
            value="Add Name"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </>
  );
};
