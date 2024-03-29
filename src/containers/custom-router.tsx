import React, { useEffect,
    useState
} from 'react';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import { TimersPage } from './timers-page/timers-page';
import { CalculatorPage } from './calculator-page/calculator-page';
import { ChemistryGroups } from './chemistry-groups/chemistry-groups';
import { ChangelogPage } from './changelog-page/changelog-page';

export const CustomRouter = React.memo(() => {
    const [route, setRoute] = useState(<CalculatorPage/>);
    const location = useLocation();

    useEffect(() => {
        const values = queryString.parse(location.search);
        const {router} = values;

        switch (router) {
            case 'chemistry':
                setRoute(<ChemistryGroups/>);
                break;
            case 'timers':
                setRoute(<TimersPage/>);
                break;
            case 'calculator':
                setRoute(<CalculatorPage/>);
                break;
            case 'changelog':
                setRoute(<ChangelogPage/>);
                break;
            default:
                setRoute(<CalculatorPage/>);
        }
    }, [location]);

    return (
        <React.Fragment>
            {route}
        </React.Fragment>
    );
});
