import { AbilityBuilder, Ability, AbilityClass } from '@casl/ability';
import {viewSections} from './aclReadSections';
import {Page} from './aclReadSections';
import roles from '../roles';


type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete' | 'view';
type Subjects = 'all'| Page;

export type AppAbility = Ability<[Actions, Subjects]>;
export const AppAbility = Ability as AbilityClass<AppAbility>;

export default function defineRulesFor(role: string) {
  const { can, rules } = new AbilityBuilder<AppAbility>();
 
  if(role === roles.ADMIN || role === roles.EDITOR || role === roles.CONTRIBUTOR) {

    can('view', viewSections.section.dashboard.search);
    
    if(role === roles.ADMIN) {
      // Here goes additional routes just for super admin
    }
  }

  return rules;
}

export function buildAbilityFor(role: string): AppAbility {
  return new AppAbility(defineRulesFor(role));
}


