import { observer } from 'mobx-react';
import * as React from 'react';
import './style.css';
import { useRootStore } from './store';
import { Checkbox, Input } from 'antd';
import { applySnapshot, getSnapshot } from 'mobx-keystone';
import {
  useForm,
  Controller,
  useFormState,
  FormProvider,
} from 'react-hook-form';

export const App = () => {
  const { uiStore } = useRootStore();

  const methods = useForm({
    defaultValues: getSnapshot(uiStore),
  });

  const { control, handleSubmit, getValues, setValue, watch } = methods;

  const { dirtyFields, touchedFields } = useFormState({
    control,
  });

  React.useEffect(() => {
    watch((data) => {
      applySnapshot(uiStore, data);
      console.log(getSnapshot(uiStore), getSnapshot(uiStore));
    });
  }, []);

  return (
    <FormProvider {...methods}>
      <form>
        <Controller
          name="Check1"
          control={control}
          render={({ field }) => (
            <Checkbox {...field} checked={field.value}>
              Checkbox1
            </Checkbox>
          )}
        />
        <Controller
          name="Check2"
          control={control}
          render={({ field }) => (
            <Checkbox {...field} checked={field.value}>
              Checkbox2
            </Checkbox>
          )}
        />
        <Controller
          name="Input"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </form>
    </FormProvider>
  );
};
