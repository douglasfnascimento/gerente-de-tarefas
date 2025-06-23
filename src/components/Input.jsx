function Input(props) {
    return(
        <input
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            type={props.type || "text"}
            placeholder={props.placeholder || "Digite aqui..."}
            value={props.value}
            onChange={props.onChange}
            // {...props}

            // {...props} é uma forma de espalhar as propriedades do objeto props dentro do componente, ou seja, se eu passar outras propriedades elas serão aplicadas automaticamente

            // dessa forma, eu poderia substituir as linhas type, placeholder, value e onchange apenas por {...props} e ele pegaria todas as props automaticamente, mas fui explícito aqui por questões de didática
        />
    );

}

export default Input;