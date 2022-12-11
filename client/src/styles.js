import { AppBar } from '@mui/material'
import { styled } from '@mui/material/styles'

const MyAppBar = styled(AppBar)(() => ({
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
}))


export { MyAppBar }
