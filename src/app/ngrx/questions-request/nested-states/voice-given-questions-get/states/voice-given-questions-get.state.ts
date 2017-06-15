export interface IVoiceGivenQuestionsGetState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const voiceGivenQuestionsGetInitialState: IVoiceGivenQuestionsGetState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
