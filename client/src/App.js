import { Container, Typography, Grow, Grid } from '@mui/material'

import { MyAppBar } from './styles'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import memories from './images/memories.png'

const App = () => {
    return (
        <Container maxWidth="lg">
            <MyAppBar position="static" color="inherit">
                <Typography sx={{ color: 'rgba(0,183,255,1)' }} variant="h2" align="center">Memories</Typography>
                <img src={memories} alt="Memories" height="60" />
            </MyAppBar>
            <Grow in>
                <Container>
                    <Grid container
                        justify="space-between"
                        alignItems="stretch">
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App