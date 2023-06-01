
import { useState } from 'react'

function CadEquip(){

function CadEquipamento(e){
 e.preventDefault()
    console.log(`O equipamento ${equipamento} encontra-se na  ${localização}`)
    console.log("Equipamento Localizado")
}
const [equipamento, setEquip] = useState()
const [patrimonio, setPat] = useState()
const [marca, setMarca] = useState()
const [modelo, setModel] = useState()
const [Nsérie, setNserie] = useState()
const [localização, setLocal] = useState()
return(
<div>
    <h1> Cadastro de Equipamento</h1>
    <form onSubmit={CadEquipamento}>
        <div>
            <label htmlFor="equip"></label>
            <input type="text" id ="equipamento" name="equipamento" placeholder = "Digite o equipamento" onChange={(e)=> setEquip(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="patrimonio"></label>
            <input type="text" id= "patrimonio" name="patrimonio" placeholder = "Digite o patrimonio" onChange={(e)=> setPat(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="marca"></label>
            <input type="text" id= "marca" name="marca" placeholder = "Digite a marca" onChange={(e)=> setMarca(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="modelo"></label>
            <input type="text" id= "modelo" name="modelo" placeholder = "Digite o modelo" onChange={(e)=> setModel(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="Nsérie"></label>
            <input type="text" id= "Nsérie" name="Nsérie" placeholder = "Digite o Nsérie" onChange={(e)=> setNserie(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="localização"></label>
            <input type="text" id= "localização" name="localização" placeholder = "Digite a localização" onChange={(e)=> setLocal(e.target.value)}/>
        </div>
        <div>
       
        <input type="submit" value="Cadastrar"/>
        </div>
        
    </form>
</div>
)

}

export default CadEquip