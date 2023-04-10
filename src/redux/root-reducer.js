import App from '@iso/redux/app/reducer';
import Auth from '@iso/redux/auth/reducer';
import Invoices from '@iso/redux/invoice/reducer';
import LanguageSwitcher from '@iso/redux/languageSwitcher/reducer';
import ThemeSwitcher from '@iso/redux/themeSwitcher/reducer';
import { combineReducers } from 'redux';
import drawer from '@iso/redux/drawer/reducer';
import modal from '@iso/redux/modal/reducer';
import profile from '@iso/redux/profile/reducer';
import company from '@iso/redux/company/reducer';
import freelance from '@iso/redux/freelance/reducer';
import jobs from '@iso/redux/jobs/reducer';
import match from '@iso/redux/match/reducer';
import interview from '@iso/redux/interview/reducer';
import tasks from '@iso/redux/tasks/reducer';

export default combineReducers({
  Auth,
  App,
  ThemeSwitcher,
  LanguageSwitcher,
  Invoices,
  modal,
  drawer,
  profile,
  company,
  freelance,
  jobs,
  match,
  interview,
  tasks,
});
