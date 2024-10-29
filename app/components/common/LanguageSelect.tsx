import { SerializeFrom } from '@remix-run/node';
import { useTranslation } from "react-i18next";
import { useFetcher, useRouteLoaderData } from 'react-router-dom';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";
import { languages } from '~/modules/i18next/config';
import { loader as rootLoader } from '~/root';



export default function LanguageSelect() {
    const { i18n } = useTranslation();
    const fetcher = useFetcher();
    const rootLoaderData = useRouteLoaderData("root") as SerializeFrom<typeof rootLoader>;
    const handleLanguageChange = (value: string) => {
        i18n.changeLanguage(value);
        fetcher.load(`?lng=${value}`);
    };

    return (
        <Select defaultValue={rootLoaderData.locale || "en"} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
                {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code} >
                        {lang.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}