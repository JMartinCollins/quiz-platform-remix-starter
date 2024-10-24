import { Button } from '~/components/ui/button';
import PhoneScreen from '~/components/ui/phone-screen';

export default function Example() {
    return <PhoneScreen>
        <div className="space-y-4">
            <p className="text-center">Welcome to My Cool App!</p>
            <Button className="w-full">Click me!</Button>
            <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm">This is a sample content area inside the phone screen.</p>
            </div>
        </div>
        <div className="space-y-4">
            <p className="text-center">Welcome to My Cool App!</p>
            <Button className="w-full">Click me!</Button>
            <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm">This is a sample content area inside the phone screen.</p>
            </div>
        </div>
        <div className="space-y-4">
            <p className="text-center">Welcome to My Cool App!</p>
            <Button className="w-full">Click me!</Button>
            <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm">This is a sample content area inside the phone screen.</p>
            </div>
        </div>
    </PhoneScreen>
}