import React, { useEffect, useState } from 'react'
import NavBar from '../component/NavBar'
import Header from '../component/Header'
import { Box, Card, Container, Pagination, Stack, Typography, useTheme } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { jobLoadAction } from '../redux/actions/jobaction'
import { useParams } from 'react-router-dom'
import CardElement from '../component/CardElement'

const Home = () => {
  const { jobs, SetUniqueLocation, pages, Loading } = useSelector(state=>state.loadJobs);
  const {palette} = useTheme();
  const dispatch = useDispatch();
  const { keyword,location } = useParams();

  const [page, setPage] = useState(1);
  const [cat, setCat] = React.useState('');

  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
  },[page, keyword, cat, location])

  return (
    <>
    <Box sx={{bgcolor: "#fafafa", minHeight: "100vh" }}>
        <NavBar/>
        <Header/>
        <Container>
          <Stack
              direction={{xs: 'column', sm: 'row'}}
              spacing={{xs: 1, sm: 2 , md: 4}}
          >
              <Box sx ={{flex:2, p:2}}>
                <Card sx={{minWidth:150, mb:3, mt:3, p:2}}>
                    <Box sx={{pb:2}}> 
                       <Typography components="h4" sx={{color: palette.secondary.main, fontWeight: 600}}>
                          Filter job by category
                       </Typography>
                    </Box>
                </Card>
              </Box>
              <Box sx={{ flex:5, p:2 }}>
                  {
                    jobs && jobs.map((job,i) =>(
                      <CardElement
                        key={i}
                        id={job._id}
                        jobTitle={job.title}
                        description={job.description}
                        category={job.jobType ? job.jobType.jobTypeName : "No category"}
                        location={job.location}
                      />
                    ))
                  }
                  <Stack spacing={2}>
                    <Pagination page={page} count={pages === 0 ? 1 : pages} onChange={(event,value) => setPage(value)}/>
                  </Stack>
              </Box>
          </Stack>
        </Container>
    </Box>
        
    </>
  )
}

export default Home