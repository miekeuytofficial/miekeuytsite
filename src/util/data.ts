import {
  HandshakeCheckIcon,
  LearningIcon,
  MultitaskingPersonIcon,
  PositiveInfluenceIcon,
  PositivityIcon,
  FistBumpIcon,
  LightbulbQuestionIcon,
  MagnifyingGlassIcon,
  WorldLanguageIcon
} from '@/components/icon-components'
import type { IconComponentItem } from './types'

export const softSkillItems: IconComponentItem[] = [
  { key: 'dependable', icon: HandshakeCheckIcon },
  { key: 'Team motivator', icon: PositiveInfluenceIcon },
  { key: 'Learning', icon: LearningIcon },
  { key: 'Positive attitude', icon: PositivityIcon },
  { key: 'Adaptable', icon: MultitaskingPersonIcon },
  { key: 'Quick learner', icon: LightbulbQuestionIcon },
  { key: 'Attention to detail', icon: MagnifyingGlassIcon },
  { key: 'Collaboration', icon: FistBumpIcon },
  { key: 'Cross-cultural Communication Skills', icon: WorldLanguageIcon }
]
