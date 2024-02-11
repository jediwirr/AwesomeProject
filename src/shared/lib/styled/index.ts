import {Interpolation} from 'styled-components';
import {FastOmit} from 'styled-components/dist/types';
import styled, {NativeTarget} from 'styled-components/native';

export default function <T extends Object>(
  Element: NativeTarget,
  style?: Interpolation<FastOmit<any, never>>,
) {
  return styled(Element)<T>`
    ${style}
  `;
}
