import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../store/actions/charActionCreator';

export const useCharActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => {
        return bindActionCreators(userActionCreators , dispatch)
    }, [dispatch])
}
