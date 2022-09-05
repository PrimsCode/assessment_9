import React, {useState} from "react";
import SnackOrBoozeApi from "./Api";
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input} from "reactstrap";

function FoodForm({addFood}){

    //refresh the app to update food database
    function loadRefreshContent() {
		window.location.reload(false);
    }

    const initialState = {
        foodType:"",
        name:"",
        description:"",
        recipe:"",
        serve:""
    }

    const [formData, setFormData] = useState(initialState)

    //show msg when form is submitted
    // const [formSubmitionStatus, setFormSubmitionStatus] = useState("notSubmitted");
    // const handleSubmitionStatus = () => {
    //     setFormSubmitionStatus("Submitted");
    // }
    // const formSubmittedSuccess = (
    //         <CardBody>
    //             <CardTitle>
    //                 You have successfully created a new food item!
    //             </CardTitle>
    //         </CardBody>
    // )

    //handle form change, submit, and validate if all data are inputted
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleValidation() === true){
            addFood({...formData});
            SnackOrBoozeApi.createFood(formData, formData.foodType);
            setFormData(initialState);
            loadRefreshContent();
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
            <Card>
            {/* {formSubmitionStatus === "Submitted" && formSubmittedSuccess} */}
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
                        <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Input 
                                type="text" 
                                id="name"
                                name="name" 
                                placeholder="Food Name"
                                value={formData.name} 
                                onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="description">Description</Label>
                            <Input 
                                type="text" 
                                id="description"
                                name="description" 
                                placeholder="Food Description"
                                value={formData.description} 
                                onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="recipe">Recipe</Label>
                            <Input 
                                type="text" 
                                id="recipe"
                                name="recipe" 
                                placeholder="Recipe" 
                                value={formData.recipe} 
                                onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="serve">Serve</Label>
                            <Input
                                type="text" 
                                id="serve"
                                name="serve" 
                                placeholder="Serve" 
                                value={formData.serve} 
                                onChange={handleChange} />
                        </FormGroup>                            
                                
                        <Button>Create</Button>
                    </Form>                
                </CardBody>
            </Card>
        </section>
    )
}

export default FoodForm;