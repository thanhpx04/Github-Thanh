import { webTrigger } from "@forge/api";

export async function handler(req) {
    try {
        const [trigger] = useState(webTrigger.getUrl("gihub-web-trigger-key"));
        console.log(trigger);
        
        const body = JSON.parse(req.body);
        console.log(body);
    } catch (error) {
        console.log(error);
    }
  }