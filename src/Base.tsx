interface ButtonProps{
  //? indica que a propriedade é opicional
  text?: string;
}

function Button(props: ButtonProps){
  //?? indica que caso o valor da propriedade não seja indicado
  //usará 'Default' como valor da propriedade
  return <button className="bg-[#882b2b] px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text ?? 'Default'}</button>
}

function Base() {
  return (
    <div className="flex gap-2">
      <Button text="Enviar" />
      <Button text="Ok "/>
      <Button />
    </div>
  )
}

export default Base
