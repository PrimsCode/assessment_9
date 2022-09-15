import React, {useState} from "react";
import { Link } from "react-router-dom";
import SnackOrBoozeApi from "./Api";
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input} from "reactstrap";

function FoodForm({updateFood}){

    const initialState = {
        foodType:"",
        name:"",
        description:"",
        recipe:"",
        serve:""
    }

    const [formData, setFormData] = useState(initialState)
    const formKey = ["name", "description", "recipe", "serve"];

    //setting up newFood item
    const [newFood, setNewFood] = useState({});
    const [foodType, setFoodType] = useState("");

    // show msg when form is submitted
    const [formSubmitionStatus, setFormSubmitionStatus] = useState("notSubmitted");
    const handleSubmitionStatus = () => {
        setFormData(initialState);
        setFormSubmitionStatus("Submitted");
    }
    const formSubmittedSuccess = (
            <CardBody>
                <CardTitle>
                    You have successfully created <Link to={`/${foodType}/${newFood.id}`}><Button>{newFood.name}</Button></Link>!
                </CardTitle>
            </CardBody>
    )

    //handle form change, submit, and validate if all data are inputted
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidation() === true){
            const foodToAdd = await SnackOrBoozeApi.createFood(formData, formData.foodType);
            setNewFood(foodToAdd);
            setFoodType(formData.foodType);
            updateFood(formData.foodType);
            handleSubmitionStatus();
        }
        return;
    }

    const handleValidation = () => {
        for (let key in formData){
            if (formData[key].length === 0){
                alert(`${key} was not filled!`)
                return false;
            }
        }
        return true;
    }

    //form to create a new food item
    return (
        <section>
            {formSubmitionStatus === "Submitted" && formSubmittedSuccess}
            <Card>
            
                <CardBody>
                    <CardTitle>
                        Create A New Food
                    </CardTitle>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup></FormGroup>
                            <Label htmlFor="foodType">Select Your Food Type</Label>
                            <Input type="select" name="foodType" value={formData.foodType} onChange={handleChange}>
                                <option>Select Food Type</option>
                                <option value="drinks">Drinks</option>
                                <option value="snacks">Snacks</option>
                            </Input>
                        
                            {formKey.map((key) => 
                                 <FormGroup>
                                    <Label htmlFor={key}>{key}</Label>
                                    <Input 
                                        type="text" 
                                        id={key}
                                        name={key} 
                                        placeholder={key}
                                        value={formData.key} 
                                        onChange={handleChange} />
                                </FormGroup>
                            )}

                        <Button>Create</Button>
                    </Form>                
                </CardBody>
            </Card>
        </section>
    )
}

export default FoodForm;