import './App.css';
import * as React from 'react';

const Creator = ({}) => {
    const imagePath = "./images/"
    const [hat, setHat] = React.useState(require(imagePath + "hat1.png"));
    const [shoes, setShoes] = React.useState(require(imagePath + "shoes1.png"));
    const [shirt, setShirt] = React.useState(require(imagePath + "shirt1.png"));
    const [pant, setPant] = React.useState(require(imagePath + "pant1.png"));
    const [person, setPerson] = React.useState(require(imagePath + "person.png"));
    const [personString, setPersonString] = React.useState("person.png");
    const [hatNum, setHatNum] = React.useState(1);
    const totalHats = 3;
    const [shoesNum, setShoesNum] = React.useState(1);
    const totalShoes = 3;
    const [shirtNum, setShirtNum] = React.useState(1);
    const totalShirts = 3;
    const [pantNum, setPantNum] = React.useState(1);
    const totalPants = 3;

    const hatLeftClick = () => {
        var hatNumTemp = hatNum;
        if(hatNum < totalHats){
            hatNumTemp = hatNum + 1;
            setHatNum(hatNumTemp)
        } else {
            hatNumTemp = 1;
            setHatNum(hatNumTemp)
        }
        setHat(require(imagePath + "hat" + hatNumTemp.toString() + ".png"))
    };
    const hatRightClick = () => {
        var hatNumTemp = hatNum;
        if(hatNum > 1){
            hatNumTemp = hatNum - 1;
            setHatNum(hatNumTemp)
        } else {
            hatNumTemp = totalHats;
            setHatNum(hatNumTemp)
        }
        setHat(require(imagePath + "hat" + hatNumTemp.toString() + ".png"))
    };

    const shirtLeftClick = () => {
        var shirtNumTemp = shirtNum;
        if(shirtNum < totalShirts){
            shirtNumTemp = shirtNum + 1;
            setShirtNum(shirtNumTemp)
        } else {
            shirtNumTemp = 1
            setShirtNum(shirtNumTemp)
        }
        setShirt(require(imagePath + "shirt" + shirtNumTemp.toString() + ".png"))
    };
    const shirtRightClick = () => {
        var shirtNumTemp = shirtNum;
        if(shirtNum > 1){
            shirtNumTemp = shirtNum - 1;
            setShirtNum(shirtNumTemp)
        } else {
            shirtNumTemp = totalShirts;
            setShirtNum(totalShirts)
        }
        setShirt(require(imagePath + "shirt" + shirtNumTemp.toString() + ".png"))
    };

    const pantLeftClick = () => {
        var pantNumTemp = pantNum;
        if(pantNum < totalPants){
            pantNumTemp = pantNum + 1;
            setPantNum(pantNumTemp)
        } else {
            pantNumTemp = 1
            setPantNum(pantNumTemp)
        }
        setPant(require(imagePath + "pant" + pantNumTemp.toString() + ".png"))
    };
    const pantRightClick = () => {
        var pantNumTemp = pantNum;
        if(pantNum > 1){
            pantNumTemp = pantNum - 1;
            setPantNum(pantNumTemp)
        } else {
            pantNumTemp = totalPants;
            setPantNum(totalPants)
        }
        setPant(require(imagePath + "pant" + pantNumTemp.toString() + ".png"))
    };

    const shoesLeftClick = () => {
        var shoesNumTemp = shoesNum;
        if(shoesNum < totalShoes){
            shoesNumTemp = shoesNum + 1;
            setShoesNum(shoesNumTemp)
        } else {
            shoesNumTemp = 1
            setShoesNum(shoesNumTemp)
        }
        setShoes(require(imagePath + "shoes" + shoesNumTemp.toString() + ".png"))
    };
    const shoesRightClick = () => {
        var shoesNumTemp = shoesNum;
        if(shoesNum > 1){
            shoesNumTemp = shoesNum - 1;
            setShoesNum(shoesNumTemp)
        } else {
            shoesNumTemp = totalShoes;
            setShoesNum(totalShoes)
        }
        setShoes(require(imagePath + "shoes" + shoesNumTemp.toString() + ".png"))
    };

    const changePersonClick = () => {
        if (personString == "person.png" ){
            setPersonString("person2.png")
            setPerson(require(imagePath + "person2.png"));
        } else {
            setPersonString("person.png")
            setPerson(require(imagePath + "person.png"));
        }
    }

    return (
        <div>
            <img src={person} style={{flex:4}} className="personImage" alt="person silhoutte"/>
            <img src={shoes} style={{flex:4}} className="clothesImages"/>
            <img src={pant} style={{flex:4}} className="clothesImages"/>
            <img src={shirt} style={{flex:4}} className="clothesImages"/>
            <img src={hat} style={{flex:4}} className="clothesImages"/>

            <button className= "hatLeft" onClick={hatLeftClick}>&lt;</button>
            <button className= "hatRight" onClick={hatRightClick} style={{flex:1}}>&gt;</button>
            <button className= "shirtLeft" onClick={shirtLeftClick} style={{flex:1}}>&lt;</button>
            <button className= "shirtRight" onClick={shirtRightClick} style={{flex:1}}>&gt;</button>
            <button className= "pantLeft" onClick={pantLeftClick} style={{flex:1}}>&lt;</button>
            <button className= "pantRight" onClick={pantRightClick} style={{flex:1}}>&gt;</button>
            <button className= "shoesLeft" onClick={shoesLeftClick} style={{flex:1}}>&lt;</button>
            <button className= "shoesRight" onClick={shoesRightClick} style={{flex:1}}>&gt;</button>

            <button className= "changePerson" onClick={changePersonClick} style={{flex:1}}>Swap Body</button>
        </div>
    )
}


export default Creator;