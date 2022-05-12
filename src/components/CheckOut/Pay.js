import React, {useState} from 'react';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Menu from '../Header/Menu';

//data from reducer
import { useSelector} from "react-redux";
import InforCheck from './InforCheck';
import FormCheck from './FormCheck';
import Payment from './Payment';

//logo
import logo from "../../images/logo-01.png";
//icon
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from "react-router-dom"
import {Helmet} from "react-helmet";

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const Pay = () => {
    //các bước
    const [activeStep, setActiveStep] = useState(0);
    //các bước đã hoàn thành
    const [skipped, setSkipped] = useState(new Set());

    const cartProduct = useSelector((state) => state.cartItem)
    const totalItem = useSelector((state) => state.total)
    

    const isStepOptional = (step) => {
        return step === 1;
      };
    
      const isStepSkipped = (step) => {
        return skipped.has(step);
      };
    
      const handleNext = () => {
          //lấy giá trị bước hiện tại
        let newSkipped = skipped;
        //xét xem đã hết các bước chưa
        if (isStepSkipped(activeStep)) {
        //nếu rồi thì gán giá trị mới và xóa giá trị củ
          newSkipped = new Set(newSkipped.values());
          newSkipped.delete(activeStep);
        }
        //nếu chưa thì tiếp tục cộng 1 và gán giá trị mới
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleSkip = () => {
          // nếu không hoàn thành bước 1 thì không được skip (chỗ này là đề phòng hacker)
        if (!isStepOptional(activeStep)) {
          // You probably want to guard against something like this,
          // it should never occur unless someone's actively trying to break something.
          throw new Error("You can't skip a step that isn't optional.");
        }
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
          const newSkipped = new Set(prevSkipped.values());
          newSkipped.add(activeStep);
          return newSkipped;
        });
      };
    
      const handleReset = () => {
        setActiveStep(0);
      };
      // hàm thử nghiệm
      const handleNextTwo = () => {
        //lấy giá trị bước hiện tại
      let newSkipped = skipped;
      //xét xem đã hết các bước chưa
      if (isStepSkipped(activeStep)) {
      //nếu rồi thì gán giá trị mới và xóa giá trị củ
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      //nếu chưa thì tiếp tục cộng 1 và gán giá trị mới
      setActiveStep((prevActiveStep) => prevActiveStep + 2);
      setSkipped(newSkipped);
    };

      const Form = () => activeStep === 0 
      ? <FormCheck handleNext={handleNext} />
      : <Payment handleNext={handleNextTwo}  />

      const Confirmation = () =>(
        <div>Cảm ơn bạn đã ủng hộ</div>
    )
        


  return (
    <div>
      <Helmet htmlAttributes>
        <meta charSet="utf-8" />
        <title>Checkout Page</title>
      </Helmet>

        <div className='bg-checkout-pattern bg-cover bg-center border h-[250px]'>
          <div className='sm:hidden'>
            <Menu />
          </div>
          <div className='md:hidden flex items-center p-4 justify-between'>
             <Link to="/"><img src={logo} alt="error" className='w-28 h-20' /></Link>
              <MenuIcon  fontSize='large'/>
          </div>
          <h1 className='flex justify-center mt-40 text-2xl font-bold text-white'>Check Out</h1>
        </div>
       <div className='max-w-6xl mr-auto ml-auto  mt-36 pb-52'>
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                    labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                    );
                }
                if (isStepSkipped(index)) {
                    stepProps.completed = false;
                }
                return (
                    <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                </Box>
                </>
            ) : (
                <>
            
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                    >
                    Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                        Skip
                    </Button>
                    )}

                    <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </Box>
                </>
            )}
            </Box>
             <div className=' mt-5 lg:flex lg:space-x-2'>
                {/* form for custommer*/}
                <section className='lg:w-[60%]'>
                  {activeStep === steps.length ? <Confirmation /> :  <Form  />}
                </section>
                {/* infor checkout */}
                <section className='bg-gray-100 lg:w-[40%] sm:mt-5'>
                    <h1 className='text-center p-4 font-bold text-xl border-b-2 border-black'>Thông tin đơn hàng</h1>
                    {cartProduct.map((item) =>(
                      <div key={item.id} className="flex space-x-3 p-4">
                          <InforCheck name={item.name} img={item.img} pirce={item.pirce} quantity={item.quantity} />
                      </div>
                    ))}
                    <p className='text-xl font-bold p-4'>Toltal: ${totalItem}</p>
                </section>

               

             </div>
           
       </div>
        
    </div>
  )
}

export default Pay