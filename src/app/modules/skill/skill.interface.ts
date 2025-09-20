export type TSkill = {
  name : string;
  level : 'beginner' | 'intermediate' | 'advanced';
  icon? : string
  category : 'frontEnd' | 'backEnd' | 'tools';
  priority? : 'high' | 'medium' |'low'

}