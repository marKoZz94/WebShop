import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../config/colors';

interface IBreadCrumb {
    firstRoute: string;
    secondRouteName?: string;
}

const Breadcrumb: FC<IBreadCrumb> = ({firstRoute, secondRouteName}) => {
    return (
        <BreadcrumbWrapper>
            <ul>
                <li><Link to={firstRoute}><svg><use href={`#home`}/></svg></Link>›</li>
                {secondRouteName ?
                    <li>{secondRouteName}</li>
                : null}
            </ul>
        </BreadcrumbWrapper>
    )
}

const BreadcrumbWrapper = styled.div`
    ul {
        list-style: none;
        margin: 0;
        padding: 10px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        li {
            font-size: 16px;
            padding-left: 8px;
            color: ${colors.SECONDARY_COLOR};

            a {
                color: ${colors.DARK_GRAY_COLOR};

                &:hover {
                    color: ${colors.SECONDARY_COLOR};
                }
            }

            svg {
                width: 16px;
                height: 16px;
            }

            &:before {
                content: "/";
                color: ${colors.SECONDARY_COLOR};
                display: inline-block;
                margin-right: 8px;
            }
            &:first-child {
                &:before {
                    display: none;
                }
            }
        }
    }
`;

export default Breadcrumb;


        