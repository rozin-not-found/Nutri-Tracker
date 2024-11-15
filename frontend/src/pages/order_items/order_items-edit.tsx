import { mdiChartTimelineVariant, mdiUpload } from '@mdi/js';
import Head from 'next/head';
import React, { ReactElement, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

import CardBox from '../../components/CardBox';
import LayoutAuthenticated from '../../layouts/Authenticated';
import SectionMain from '../../components/SectionMain';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import { getPageTitle } from '../../config';

import { Field, Form, Formik } from 'formik';
import FormField from '../../components/FormField';
import BaseDivider from '../../components/BaseDivider';
import BaseButtons from '../../components/BaseButtons';
import BaseButton from '../../components/BaseButton';
import FormCheckRadio from '../../components/FormCheckRadio';
import FormCheckRadioGroup from '../../components/FormCheckRadioGroup';
import FormFilePicker from '../../components/FormFilePicker';
import FormImagePicker from '../../components/FormImagePicker';
import { SelectField } from '../../components/SelectField';
import { SelectFieldMany } from '../../components/SelectFieldMany';
import { SwitchField } from '../../components/SwitchField';
import { RichTextField } from '../../components/RichTextField';

import { update, fetch } from '../../stores/order_items/order_itemsSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

import { hasPermission } from '../../helpers/userPermissions';

const EditOrder_itemsPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    quantity: '',

    total_price: '',

    order: '',

    menu_item: '',

    shop: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { order_items } = useAppSelector((state) => state.order_items);

  const { currentUser } = useAppSelector((state) => state.auth);

  const { id } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: id }));
  }, [id]);

  useEffect(() => {
    if (typeof order_items === 'object') {
      setInitialValues(order_items);
    }
  }, [order_items]);

  useEffect(() => {
    if (typeof order_items === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = order_items[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [order_items]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: id, data }));
    await router.push('/order_items/order_items-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit order_items')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit order_items'}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <FormField label='Quantity'>
                <Field type='number' name='quantity' placeholder='Quantity' />
              </FormField>

              <FormField label='TotalPrice'>
                <Field
                  type='number'
                  name='total_price'
                  placeholder='TotalPrice'
                />
              </FormField>

              <FormField label='Order' labelFor='order'>
                <Field
                  name='order'
                  id='order'
                  component={SelectField}
                  options={initialValues.order}
                  itemRef={'orders'}
                  showField={'order_date'}
                ></Field>
              </FormField>

              <FormField label='MenuItem' labelFor='menu_item'>
                <Field
                  name='menu_item'
                  id='menu_item'
                  component={SelectField}
                  options={initialValues.menu_item}
                  itemRef={'menu_items'}
                  showField={'name'}
                ></Field>
              </FormField>

              <FormField label='shop' labelFor='shop'>
                <Field
                  name='shop'
                  id='shop'
                  component={SelectField}
                  options={initialValues.shop}
                  itemRef={'shop'}
                  showField={'name'}
                ></Field>
              </FormField>

              <BaseDivider />
              <BaseButtons>
                <BaseButton type='submit' color='info' label='Submit' />
                <BaseButton type='reset' color='info' outline label='Reset' />
                <BaseButton
                  type='reset'
                  color='danger'
                  outline
                  label='Cancel'
                  onClick={() => router.push('/order_items/order_items-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditOrder_itemsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_ORDER_ITEMS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditOrder_itemsPage;
