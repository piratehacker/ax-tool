import React, { useEffect, useState } from 'react';
import { H2 } from './Header';
import { Form, Formik } from 'formik';
import { Industry } from '../types/industries';
import TextInput from './form/TextInput';

export default function IndustryEditForm({ item, onClose }: { item: Industry, onClose: (data: Industry) => void }) {
    return <div>
        <H2>Edytuj branżę</H2>
        <Formik initialValues={item} onSubmit={(data) => onClose(data)}>
            {({ values, setFieldValue }) =>
                <Form>
                    <TextInput name="name" label="Nazwa branży AX"/>
                    <TextInput as='textarea' name="comment" label="Komentarz"/>
                    <label className="label">
                        <span className="label-text">Do weryfikacji</span>
                    </label>
                    <input name='status' type="checkbox" className="toggle"
                           checked={values.status === 1}
                           onChange={x => setFieldValue('status', values.status ? item.status : 1)}
                    />
                    <div className="flex justify-between">
                        <button className="btn btn-error mt-5">Usuń</button>
                        <div className="space-x-2">
                            <button className="btn mt-5">Anuluj</button>
                            <button type="submit" className="btn btn-primary mt-5">Zapisz</button>
                        </div>
                    </div>
                </Form>
            }
        </Formik>
    </div>
}