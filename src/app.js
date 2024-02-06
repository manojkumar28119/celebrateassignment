import {Component} from "react"
import { IoMdArrowDropup } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


import "./app.css"


import {PageContainer,Container,Input,Form,HeadingText,SelectOptions,IconsContainer,FontSizeCard,FontSizeText,Button,
    InputColor,FontSizeAndInputCard,ColorCard,HeadingText1,AddText,Option,AddedText} from "./styledComponent"
//font-family-list
const fontFamilies = [
    {
      name: "Arial",
      category: "Sans-serif",
      uniqueNo: "Arial",  
    },
    {
      name: "Caveat",
      uniqueNo: "Caveat",
    },
    {
      name: "Lobster",
       uniqueNo: "Lobster",
    },
    {
      name: "Bree Serif",
       uniqueNo: "Bree Serif",
    },
    {
      name: "Playfair Display",
       uniqueNo: "Playfair Display",
    },
    {
      name: "Monoton",
       uniqueNo: "Monoton",
    },
    {
        name:"Roboto",
        uniqueNo:"Roboto"
    }
   ];
 

class App extends Component {

    state = {fontStyle:fontFamilies[0].name,fontSize :20,fontcolor : "#000000",bgColor:"#ffffff",isadded:false,inputText:""}
    
    onChangeInputText = () => {
        this.setState({inputText:event.target.value})
    }

    onChangeFontStyle = (event) => {
         this.setState({fontStyle:event.target.value})
    }

    onClickIncrement = () => {
        this.setState(prevState => ({fontSize: prevState.fontSize + 1}))
    }

    onClickDecrement = () => {
        this.setState(prevState => ({fontSize: prevState.fontSize !== 0 ? prevState.fontSize - 1:prevState.fontSize}))
    }

    onChangeColor = (event) => {
        this.setState({fontcolor:event.target.value})
    }

    onChangeBgColor = (event) => {
        this.setState({bgColor:event.target.value})
    }

    onClickAddTextBtn = (event) => {
        event.preventDefault();
        this.setState({isadded:true})
    } 

    render(){
        const {fontStyle,fontSize,fontcolor,bgColor,isadded,inputText} = this.state
        console.log(fontcolor)

        return(
            <PageContainer>
                <Container>
                    {isadded?<AddedText bgcolor = {bgColor} fontStyle = {fontStyle} fontSize={fontSize} fontcolor = {fontcolor}>{inputText}</AddedText>
                        :<Input onChange={this.onChangeInputText}
                        value={inputText} type="text" bgcolor = {bgColor} fontStyle = {fontStyle} fontSize={fontSize} fontcolor = {fontcolor}  placeholder="New Text" />}
                </Container>
                <Form>
                    <HeadingText>Font Style</HeadingText>
                    <SelectOptions onChange={this.onChangeFontStyle} >
                        {fontFamilies.map((family) => <Option value={family.name} key = {family.uniqueNo}>{family.name}</Option>)}
                    </SelectOptions>
                    
                    <FontSizeAndInputCard>
                        <ColorCard>
                            <HeadingText1>Size</HeadingText1>
                            <FontSizeCard>
                                <FontSizeText>{fontSize}</FontSizeText>
                                <IconsContainer>
                                    <Button type="button" onClick={this.onClickIncrement}>
                                    <IoIosArrowUp className="icon"/>
                                    </Button>                        
                                    <Button type="button" onClick={this.onClickDecrement}> 
                                    <IoIosArrowDown className="icon" />
                                    </Button>
                                </IconsContainer>
                            </FontSizeCard>
                        </ColorCard>
                        <ColorCard>
                            <HeadingText>Color</HeadingText>
                            <InputColor type = "color" onChange={this.onChangeColor} />
                        </ColorCard>
                     </FontSizeAndInputCard>
                     <HeadingText>Background color</HeadingText>
                     <InputColor value={bgColor} type="color" onChange={this.onChangeBgColor} />
                     <AddText  type = "button" onClick={this.onClickAddTextBtn}>
                        Add Text
                     </AddText>
                </Form>
            </PageContainer>
        )
    }
}

 

export default App