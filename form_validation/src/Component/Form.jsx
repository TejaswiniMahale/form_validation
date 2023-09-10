import { Box, Divider, FormControl, FormControlLabel, FormLabel, InputAdornment, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./form.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchIcon from '@mui/icons-material/Search';
import EastIcon from '@mui/icons-material/East';

const Form = () => {
    const [gender_value, setGenderValue] = useState('');
    const [state, setState] = useState('');
    const [course, setCourse] = useState('');
    const [name, setname] = useState('')
    const [email,setEmail] = useState('')
    const [number,setNumber] = useState('')
    const [gender_error,setGender_Error] = useState(false)
    const [state_error,setState_Error] = useState(false)
    const [course_error,setCourse_Error] = useState(false)
    const [name_error,setName_Error] = useState(false)
    const [email_error,setEmail_Error] = useState(false)
    const [number_error,setNumber_error] = useState(false)

    const handleChangeNumber = (event) =>{
        setNumber(event.target.value)
    }

    const handleChangeName = (event)=>{
        setname(event.target.value)
    }

    const handleChangeEmail = (event) =>{
        setEmail(event.target.value)
    }

    const handleChangeGender = (event) => {
        setGenderValue(event.target.value);
    };
    
    const handleChangeState = (event) => {
        setState(event.target.value);
    };
    const handleChangeCourse = (event) => {
        setCourse(event.target.value);
    };
  
    const handleSubmit = () =>{
        if(gender_value=="" || state=="" || course=="" || name=="" || email=="" || number==""){
            if(gender_value == ""){
                setGender_Error(true)
            }
            if(state == ""){
                setState_Error(true)
            }
            if(course == ""){
                setCourse_Error(true)
            }
            if(name == ""){
                setName_Error(true)
            }
            if(email==""){
                setEmail_Error(true)
            }
            if(number==""){
                setNumber_error(true)
            }
        }
        else{
            alert("Form Submitted Succefully")
            setCourse("")
            setEmail("")
            setNumber("")
            setState("")
            setname("")
            setGenderValue("")
        }
    }
  return (
    <Box width="60%" margin="auto" textAlign="center" padding="2% 5%" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius="20px" noValidate
    autoComplete="off">
        <Stack>
            <p className='form_h'>Compare & Select from 100%</p>
            <p className='form_sh'>Best University for your Online MBA Course</p>
            <Stack direction="row" justifyContent="center" spacing={2}>
                <div className='img_box'>
                    <img src="https://collegevidya.com/_next/image/?url=https%3A%2F%2Fd1aeya7jd2fyco.cloudfront.net%2Flogo%2Fupes-online-logo.webp&w=256&q=75" alt=""/>
                </div>
                <div className='img_box'>
                    <img src="https://collegevidya.com/_next/image/?url=https%3A%2F%2Fd1aeya7jd2fyco.cloudfront.net%2Flogo%2FSymbiosis-SCDL-logo.jpg&w=256&q=75" alt=""/>
                </div>
                <div className='img_box'>
                    <img src="https://collegevidya.com/_next/image/?url=https%3A%2F%2Fd1aeya7jd2fyco.cloudfront.net%2Flogo%2Fbimtech-logo-with-upgrad.jpg&w=256&q=75" alt=""/>
                </div>
            </Stack>
            <Stack direction="row" flexWrap="wrap" justifyContent="center" alignItems="center" spacing={2} paddingTop="10px" marginBottom="40px">
                <p className='form_gt'>
                    <span><CheckCircleIcon sx={{ fontSize: 15 }}/></span>
                    No-Cost EMI From <span style={{fontWeight:"700"}}>₹4,999/-</span>
                </p>
                <p className='form_gt'>
                    <span><CheckCircleIcon sx={{ fontSize: 15 }}/></span>
                    100% Placemnet Assistance
                </p>
            </Stack>
        </Stack>
        <Box>
            <Stack>
            <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={gender_value}
                            onChange={handleChangeGender}
                            error={gender_error}
                            helperText={gender_error?"Select Gender":""}
                        >
                            <Stack direction="row" width="100%" justifyContent="space-evenly" marginBottom="10px">
                            <div className='radio_btn'>
                                <label>
                                    <span>
                                        <img src="https://collegevidya.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fmale.b191a968.png&w=32&q=75" alt=""/>
                                    </span>
                                    Male
                                </label>
                                <FormControlLabel value="male" control={<Radio />} />
                            </div>
                            <div className='radio_btn'>
                                <label>
                                    <span>
                                        <img src="https://collegevidya.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffemale.38442d0e.png&w=32&q=75" alt=""/>
                                    </span>
                                    Female
                                </label>
                                <FormControlLabel value="female" control={<Radio />}/>
                            </div>
                            </Stack>
                        </RadioGroup>
                <Stack direction="row" justifyContent="space-evenly"  marginBottom="10px">
                    <div className='input_box'>
                    <TextField
                        sx={{ m: 1 ,width:"95%" }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"></InputAdornment>,
                        }}
                        fullWidth
                        onChange={handleChangeName}
                        value={name}
                        error={name_error}
                        helperText={name_error?"Enter name":""}
                        />
                        <label>Full Name*</label>
                    </div>
                    <div className='input_box'>
                    <TextField
                        sx={{ m: 1 ,width:"95%"}}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><MailOutlineIcon/></InputAdornment>,
                        }}
                        fullWidth
                        onChange={handleChangeEmail}
                        value={email}
                        error={email_error}
                        helperText={email_error?"Enter Email":""}
                        />
                        <label>Email*</label>
                    </div>
                </Stack>
                <Stack direction="row" justifyContent="space-evenly" marginBottom="10px">
                    <div className='input_box'>
                    <TextField
                    sx={{ m: 1 ,width:"95%" }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start" >
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <img src='https://flagcdn.com/w20/in.png' alt='' style={{height:"15px"}}/>
                                    <p>+91</p>
                                    <Divider/>
                                </Stack>
                            </InputAdornment>,
                        }}
                        value={number}
                        error={number_error}
                        helperText={number_error?"Enter number":""}
                        onChange={handleChangeNumber}
                        />
                        <label>Mobile Number*</label>
                    </div>
                    <div className='input_box'>
                    <TextField
                    sx={{ m: 1 ,width:"95%" }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><MailOutlineIcon/></InputAdornment>,
                        }}
                        placeholder="DD/MM/YYYY"
                        />
                        <label>Date of Birth*</label>
                    </div>
                </Stack>
                <Stack direction="row" justifyContent="space-evenly" marginBottom="10px">
                    <div className='input_box'>
                    <FormControl >
                        <Select
                        sx={{ m: 1 }}
                        value={state}
                        onChange={handleChangeState}
                        error={state_error}
                        helperText={state_error?"Enter State":""}
                        >
                        <MenuItem value={10}>Maharashatra</MenuItem>
                        <MenuItem value={20}>Punjab</MenuItem>
                        <MenuItem value={40}>Haryana</MenuItem>
                        <MenuItem value={50}>UP</MenuItem>
                        <MenuItem value={60}>MP</MenuItem>
                        <MenuItem value={70}>Kerala</MenuItem>
                        <MenuItem value={70}>Taminladu</MenuItem>
                        <MenuItem value={80}>jharkhand</MenuItem>
                        <MenuItem value={90}>Bihar</MenuItem>
                        </Select>
                    </FormControl>
                    <label>state*</label>
                    </div>
                    <div className='input_box'>
                    <FormControl >
                        <Select
                        sx={{ m: 1 }}
                        >
                        <TextField
                        sx={{ m: 1 }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><SearchIcon/></InputAdornment>,
                            }}
                        />
                        <p>No result found</p>
                        </Select>
                    </FormControl>
                    <label>City*</label>
                    </div>
                </Stack>
                <Stack marginBottom="10px">
                <div className='input_box'>
                    <FormControl >
                        <Select
                        sx={{ m: 1 }}
                        value={course}
                        onChange={handleChangeCourse}
                        placeholder='Not Decided Yet'
                        error={course_error}
                        helperText={course_error?"Enter number":""}
                        >
                        <MenuItem value={10}>Finance Management</MenuItem>
                        <MenuItem value={20}>Marketing Management</MenuItem>
                        <MenuItem value={30}>HR</MenuItem>
                        <MenuItem value={40}>IT Management</MenuItem>
                        <MenuItem value={50}>Data sciende</MenuItem>
                        <MenuItem value={60}>Operation Management</MenuItem>
                        </Select>
                    </FormControl>
                    <label>Specilization*</label>
                    </div>
                </Stack>
                <button className='btn' onClick={handleSubmit}>Find Best University <span><EastIcon/></span></button>
            </FormControl>
            </Stack>
        </Box>
    </Box>
  )
}

export default Form
