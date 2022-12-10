import { observer } from 'mobx-react';
import * as React from 'react';
import './style.css';
import { useRootStore } from './store';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { getSnapshot } from 'mobx-keystone';

export const App = observer(() => {
  const store = useRootStore();
  const { uiStore } = store;

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(getSnapshot(uiStore));
    uiStore.setCheck(e.target.checked)
  };

  return (
    <div>
      <Checkbox checked={uiStore.check} onChange={onChange}>
        Checkbox
      </Checkbox>
    </div>
  );
});
