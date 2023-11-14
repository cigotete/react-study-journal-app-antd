import { FloatButton } from 'antd';

import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>

      <NoteView />
      {/* <NoteView /> */}

      <FloatButton onClick={() => console.log('click')}/>

    </JournalLayout>
  )
}
