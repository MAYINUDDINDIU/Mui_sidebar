import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Footer from '../components/Footer';

class Welcome extends Component {
    render() {
        return (
            <React.Fragment>
                <Typography paragraph>
                    ius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget . Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
                <Footer></Footer>
            </React.Fragment>


        )
    }
}

export default Welcome