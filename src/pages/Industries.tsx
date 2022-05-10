import React, { useMemo, useState } from 'react';
import { H1 } from '../components/Header';
import { Industry } from '../types/industries';
import classNames from 'classnames';
import IndustryEditForm from '../components/IndustryEditForm';


export default function Industries() {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState<Industry | null>(null);

    const [data, setData] = useState<Industry[]>([
        {
            id: 0,
            name: 'Administracja i zarządzanie',
            comment: '',
            pkd: `82.99 Pozostała działalność wspomagająca prowadzenie działalności gospodarczej, gdzie indziej niesklasyfikowana
70 DZIAŁALNOŚĆ FIRM CENTRALNYCH (HEAD OFFICES); DORADZTWO ZWIĄZANE Z ZARZĄDZANIEM
70.2 Doradztwo związane z zarządzaniem`,
            status: -1,
        }
    ]);


    return <div>
        <H1>Branże</H1>
        <div className="w-full">
            <table className="table table-normal w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Branża AX</th>
                    <th>Powiązanie PKD</th>
                    <th>Komentarz</th>
                    <th>Akcje</th>
                </tr>
                </thead>
                <tbody>
                {data.map((industry, index) => (
                    <tr key={index} className="hover cursor-pointer" onClick={() => {
                        setCurrentItem(industry);
                        setModalOpen(true);
                    }}>
                        <td>{index + 1}</td>
                        <td>{industry.name}</td>
                        <td className="whitespace-pre">{industry.pkd}</td>
                        <td>{industry.comment}</td>
                        <td>
                            <button className="btn">Edytuj</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

        <div className={classNames("modal", modalOpen && "modal-open")} onClick={() => setModalOpen(false)}>
            <div className="modal-box" onClick={e => e.stopPropagation()}>
                {currentItem && <IndustryEditForm item={currentItem} onClose={(item) => {
                    setModalOpen(false);
                    setData(data.map((x) => x.id == item.id ? item : x));
                }} />}
            </div>
        </div>

    </div>
}