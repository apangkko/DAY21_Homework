import { useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  weight: string;
};

const DrinkingWater = () => {
  const { register } = useForm<Inputs>();
  const [Result, setResult] = useState<number>(0);

  return (
    <>
      <h1>
        ควรดื่มน้ำวันละเท่าไหร่
        <br />
        {Result} มล.
      </h1>
      <form>
        <input
          {...register("weight", {
            onChange: (e) => {
              setResult(Math.round(e.target.value * 2.2 * (30 / 2)));
            },
          })}
          placeholder="น้ำหนักของคุณ (กิโลกรัม)"
        />
      </form>
    </>
  );

  //     const [Weight, setWeight] = useState<number>(0);

  //     const onChangeWeight = (event:React.ChangeEvent<HTMLInputElement>) => {
  //         setWeight(+event.target.value);
  //     }

  //   return (
  //    <>
  //     <h1>ควรดื่มน้ำวันละเท่าไหร่<br/>{Math.round(Weight*2.2*(30/2))} มล.</h1>
  //     <form>
  //         <input type="text" id="weight" name="weight" placeholder='น้ำหนักของคุณ (กิโลกรัม)' onChange={onChangeWeight} />
  //     </form>
  //    </>
  //   )
};

export default DrinkingWater;
