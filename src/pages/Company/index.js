import CompanyList from './CompanyList';
import CompanyCreate from './CompanyCreate';
import CompanyEdit from './CompanyEdit';
import CompanyShow from './CompanyShow';
import PeopleIcon from '@material-ui/icons/ShoppingBasket';

export default {
  name: 'companies',
  list: CompanyList,
  create: CompanyCreate,
  edit: CompanyEdit,
  show: CompanyShow,
  icon: PeopleIcon
}