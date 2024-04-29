import classes from "./Input.module.css";

export default function Input(props: any) {
  return (
    <div className={classes.Input}>
      <input {...props}/>
    </div>
  )
}
