import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/App.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthLayout from 'layouts/auth';
import AdminLayout from 'layouts/admin';
import RtlLayout from 'layouts/rtl';
import TabloLayout from 'layouts/tablo';
import TabloListLayout from 'layouts/tablolist';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<ThemeEditorProvider>
				<HashRouter>
					<Switch>
						<Route path={`/auth`} component={AuthLayout} />
						<Route path={`/admin`} component={AdminLayout} />
						<Route path={`/rtl`} component={RtlLayout} />
						<Route path={`/tablo`} component={TabloLayout} />
						<Route path={`/tablolist`}>
							<Route index component ={TabloListLayout} />
							{/* <Route path= {`/tablosample`} component = {TabloLayout} /> */}
							{/* <Route path= {`/tablo`} component={TabloLayout} /> */}
						<Route path={`/MCLS_05`} component={AdminLayout} />
						<Route path={`/MCLS_06`} component={AdminLayout} />

						<Route path={`/MCLS_04_a`} component={AdminLayout} />
						<Route path={`/MCLS_04_b`} component={AdminLayout} />
						<Route path={`/MCLS_04_c`} component={AdminLayout} />


						<Route path={`/MCLS_08`} component={AdminLayout} />
						<Route path={`/MCLS_11`} component={AdminLayout} />

						</Route>
						<Redirect from='/' to='/admin' />
					</Switch>
				</HashRouter>
			</ThemeEditorProvider>
		</React.StrictMode>
	</ChakraProvider>,
	document.getElementById('root')
);
